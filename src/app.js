import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Route, Redirect, Switch, Link } from 'react-router-dom';
import asyncRoute from 'Assets/scripts/asyncRoute';
import RouteList from "Src/routeList.js";

import Header from "Partials/Header";
import Footer from "Partials/Footer";
import Modal from "Partials/Modal";

import { showModal } from "Actions/Modal.js";
import LoadingIcon from 'Elements/LoadingIcon';
import ErrorPage from 'Pages/Error'


let asyncPages = {};
RouteList.forEach((name) => {
	if (_.isNil(name[2])) {
		if (_.isString(name[0])) {
			let componentName = name[0].replace(":custom:", "");
			asyncPages[name] = asyncRoute(() => import('Pages/' + componentName ));
		} else {
			asyncPages[name] = asyncRoute(() => import('Pages/' + name[0].component ));
		}
	} else {
		asyncPages[name] = asyncRoute(() => import("Src/" + name[2]));
	}
});

const createRoute = (props) => {
	return <Route
		exact
		key={"route_" + props.path}
		path={props.path}
		render={() => {
			return (_.isNil(props.redirect) ? props.render : <Redirect to={props.redirect} />)
		}}
	/>
}

class PageFrame extends Component {
	constructor(props) {
		super(props);

		this.state = {
			docHeight: "0px",
			floatingOpen: false,
			floatingLeft: null,
			floatingTop: 100
		}

		this.resize = () => {
			let floatingLeft = ((window.innerWidth - 852) / 2) - 372;

			this.setState({
				docHeight: (window.innerHeight - 235) + "px",
				floatingLeft: (floatingLeft) + "px"
			})
		}

		this.componentWillReceiveProps = (props) => {
			if (this.props.modal.template != props.modal.template) {
				requestAnimationFrame(this.resize);
			}
		}

		this.componentDidMount = () => {
			this.resize();

			window.addEventListener('resize', this.resize);
		}
	}

	render() {
		return (<div id="main_wrapper">
			{this.props.location.pathname.includes("admin") ? null : <Header {...this.props} />}
			<div id="main_container">
				<div className="debug_window" style={{right: this.props.state.debugWindow ? "10px" : "-300px"}}>
					<ul>
						{(() => {
							return RouteList.map((name) => {
								let linkName = name[1] == "/my-favorites" ? "My Favorites" : name[0]
								return <li key={"link_" + name[1]}><Link to={name[1]}>{_.isString(linkName) ? linkName.replace(":custom:", "").replace(":common:", "") : linkName.component}</Link></li>
							})
						})()}
					</ul>
				</div>
				
				{this.props.children}
				<Modal />
			</div>

			{this.props.location.pathname.includes("admin") ? null : <Footer {...this.props} />}
		</div>)
	}
}

class PageDesktop extends Component {
	constructor(props) {
		super(props);

		this.state = {
			categories: [],
			user: {},
			debugWindow: false,
		}

		this.componentDidMount = () => {
			document.onkeydown = (e) => {
				if (e.keyCode == 192) {
					this.setState({ debugWindow: !this.state.debugWindow })
				}
			};
		}
		
		this.defaultComponent = (namePath, RouteComponent) => {
			let routeProps = {
				location: this.props.location,
				history: this.props.history
			}

			return <PageFrame {...this.props} state={{ ...this.state }} path={namePath}>
				<RouteComponent route={{ ...routeProps, path: namePath }} />
			</PageFrame>
		}

		this.pageIsLoading = (namePath) => {
			return <PageFrame {...this.props} state={{ ...this.state }} path={namePath}>
				<div className="loading-icon-center-wrapper"><LoadingIcon /></div>
			</PageFrame>
		}

		this.pageShouldExecuteFunction = (namePath, nameFunction) => {
			return <PageFrame {...this.props} state={{ ...this.state }} path={namePath}>
				<div className="loading-icon-center-wrapper">
					<LoadingIcon />
					{(() => {
						if (window.location.pathname == namePath) { nameFunction() }
						return <div></div>
					})()}
				</div>
			</PageFrame>
		}
	}

	render() {
		let router = [];
		router = RouteList.map((name) => {
			let namePath = name[1];
			let RouteComponent = asyncPages[name];

			if (!name[0].includes(":custom:")) {
				return createRoute({ path: namePath, render: this.defaultComponent(namePath, RouteComponent) })
			} else {
				return createRoute({ path: namePath, render: this.defaultComponent(namePath, RouteComponent) })
			}
		})

		router.push(createRoute({
			path: "/no-connection", render: this.pageShouldExecuteFunction("/no-connection", () => {
				if (this.props.page.hasConnection) {
					this.props.history.goBack();
					this.props.desktopSetConnection(false);
					DESKTOP.hasConnection = false;
				}
			})
		}))

		router.push(<Route
			key={"route_" + this.props.path}
			render={() => {
				return <PageFrame {...this.props} state={{ ...this.state }} path={"404"}>
					<ErrorPage route={{ location: this.props.location, history: this.props.history }} error="404" />
				</PageFrame>
			}}
		/>)

		return (<Switch>{router}</Switch>)
	}
}

const mapStateToProps = state => {
	return { modal: { ...state.modalDesktop } }
};

const mapDispatchToProps = dispatch => {
	return {
		showModal: (state) => { return dispatch(showModal(state)) },
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PageDesktop);