import { read, update } from "Services/crud";

function Constructor (state_shape) {
    let default_state = {
        loaded: false,
        canUpload: false,
        changed: false,

        image_index: null,
        image_key: null,

        canSave: true,
    }

    this.state = {...default_state, ...state_shape};

    this.onValidImage = (base64)=>{
        let item_to_edit = this.state[this.state.image_key];

        if (_.isArray(item_to_edit)){
            console.log("WEE##", item_to_edit[this.state.image_index])

            if (_.isArray(item_to_edit[this.state.image_index])){
                item_to_edit[this.state.image_index][0] = base64;
            } else {
                item_to_edit[this.state.image_index].image = base64;
            }
            
        } else {
            item_to_edit.image = base64;
        }

        let update_obj = { changed: true}
        update_obj[this.state.image_key] = item_to_edit

        this.setState(update_obj)
    }

    this.handleChangeArray = (e, state_key, array_key, index)=>{
        let item_to_edit = [...this.state[state_key]];
        if (array_key.includes("button")){
            item_to_edit[index]["button"][array_key.split(".")[1]] = e.target.value;
        } else {
            item_to_edit[index][array_key] = e.target.value;
        }

        let update_obj = { changed: true}
        update_obj[state_key] = item_to_edit
       
        this.setState(update_obj)
    }

    this.handleChangeObject = (e, state_key, array_key,)=>{
        let item_to_edit = {...this.state[state_key]};

        if (array_key.includes("button")){
            item_to_edit["button"][array_key.split(".")[1]] = e.target.value;
        } else {
            item_to_edit[array_key] = e.target.value;
        }


        let update_obj = { changed: true}
        update_obj[state_key] = item_to_edit
       
        this.setState(update_obj)
    }

    this.handleChangeList = (e, state_key, index)=>{
        let item_to_edit = [...this.state[state_key]];
        item_to_edit[index] = e.target.value;

        let update_obj = { changed: true}
        update_obj[state_key] = item_to_edit
       
        this.setState(update_obj)
    }

    this.handleChangeListArray = (e, state_key, index, twodex)=>{
        let item_to_edit = [...this.state[state_key]];
        item_to_edit[index][twodex] = e.target.value;

        let update_obj = { changed: true}
        update_obj[state_key] = item_to_edit
       
        this.setState(update_obj)
    }

    this.handleRemoveList = (state_key, index)=>{
        let item_to_edit = [...this.state[state_key]];

        item_to_edit.splice(index, 1)

        let update_obj = { changed: true}
        update_obj[state_key] = item_to_edit

        this.setState(update_obj)
    }

    this.handleAddList = (state_key, value = "")=>{
        let item_to_edit = [...this.state[state_key]];

        item_to_edit.push(value)

        let update_obj = { changed: true}
        update_obj[state_key] = item_to_edit

        this.setState(update_obj)
    }

    this.componentDidMount = ()=>{
		read({db: "pages", filter:{page_id: this.page_id}}).then((result)=>{
			if (!_.isEmptyArray(result)){
                let state_update = {
                    loaded: true,
                    canUpload: true
                }

                Object.keys(state_shape).forEach((state_key)=>{
                    state_update[state_key] = result[0].content[state_key]
                })

				this.setState(state_update)
			}
		})
    }

    this.saveChanges = ()=>{
        if (this.state.canSave){
            this.setState({canSave: false}, ()=>{
                if (this.state.changed){
                    let update_data = {}

                    Object.keys(state_shape).forEach((state_key)=>{
                        update_data[state_key] = this.state[state_key]
                    })

                    update({
                        db: "pages",
                        filter: {page_id: this.page_id},
                        data: {
                            content: update_data
                        }
                    }).then(()=>{
                        window.location.reload()
                    }).catch((err)=>{
                        alert(err)
                    })
                } else {
                    alert("No changes to save")
                    this.setState({canSave: true})
                }
            })
        }
    }
}

export default Constructor