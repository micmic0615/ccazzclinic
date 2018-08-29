const defaultState = {
	data: null,
	values: null,
	template: null,
	serviceid: null,
	itemid: null,
	addons: [],
}

const modalReducer = (state = defaultState, action) => {
	switch(action.type) {
		case "SET_MODAL_DESKTOP":
			let passedActions = _.jsonClone(action);

			if (!_.isNilDeep(action, "data.add_ons")){
				action.data.add_ons = [...action.data.add_ons].filter(p => (!_.isEmptyArray(p.options)));
				passedActions.data.add_ons = [...action.data.add_ons]
			}


			if (!_.isNil(action.values) && !_.isNil(action.data)){
				if ((!_.isEmptyArray(action.values.addons) || !_.isEmptyArray(action.values.special)) && !_.isEmptyArray(action.data.add_ons)){

					let sizeChecker = (sizeItem, valueAddonId)=>{
						if (String(sizeItem.add_on.id) == String(valueAddonId)){
							return {addonItem: sizeItem}
						} else {
							let returnObj = null

							if (!_.isNil(sizeItem.dao_id_map) && !_.isEmptyArray(sizeItem.daog_id_list)){
								let daoId = sizeItem.daog_id_list[0];
								let daoMap = sizeItem.dao_id_map[daoId];

								if (!_.isEmptyArray(daoMap)){
									daoMap.forEach((daoOption)=>{
										
										if (!_.isNil(daoOption.sizes)){
											if (_.isArray(daoOption.sizes)){
												daoOption.sizes.forEach((daoSize)=>{
													if (String(daoSize.add_on.id) == String(valueAddonId)){
														returnObj = {
															addonItem: daoSize, 
															addon_id: daoId,
															option_id: daoOption.id,
															item_id: daoSize.add_on.id,
															price: 0
														}
													}
												})
											} else {
												_.objectToArray(daoOption.sizes).forEach((daoSize)=>{
													if (String(daoSize.add_on.id) == String(valueAddonId)){
														returnObj = {
															addonItem: daoSize, 
															addon_id: daoId,
															option_id: daoOption.id,
															item_id: daoSize.add_on.id,
															price: 0
														}
													}
												})
											}
											
										} else {
											if (String(daoOption.id) == String(valueAddonId)){
												returnObj = {
													addonItem: daoOption, 
													addon_id: daoId,
													option_id: daoOption.id,
													item_id: null,
													price: 0
												}
											}
										}
									})
								}
								
							}

							return returnObj
						}
					}

					passedActions.addons = [];
					if (!action.data.is_solo){
						let addonValues = _.jsonClone(action.values.addons);
					
						addonValues.forEach((valueAddon)=>{

							let i, dataAddon, addonItem = null;
							let foundAddon = false;

							let addon_id, item_id, option_id, price = 0;


							for (i = 0; i < action.data.add_ons.length; ++i) {
								dataAddon = action.data.add_ons[i];
								if (!_.isEmptyArray(dataAddon.options) && !_.isNil(dataAddon.options[0].sizes)){
									dataAddon.options.forEach((option)=>{
										if (_.isNil(addonItem)){
											let addonTemp = null;
											if (_.isArray(option.sizes)){
												option.sizes.forEach((size)=>{if (_.isNil(addonTemp)) {
													addonTemp = sizeChecker(size, valueAddon.item_id)
												}})
											} else {
												_.objectToArray(option.sizes).forEach((size)=>{if (_.isNil(addonTemp)) {
													addonTemp = sizeChecker(size, valueAddon.item_id)
												}})
											}

											if (!_.isNil(addonTemp)){
												
												addonItem = addonTemp.addonItem;
												
												addon_id = !_.isNil(addonTemp.addon_id) ? addonTemp.addon_id : dataAddon.id;
												option_id = !_.isNil(addonTemp.option_id) ? addonTemp.option_id : option.id;
												item_id = !_.isNil(addonTemp.item_id) ? addonTemp.item_id : addonItem.add_on.id;
												price = !_.isNilDeep(addonItem, "add_on.price") ? addonItem.add_on.price : 0;
											}
										}
									})
								} else {
									addonItem = dataAddon.options.find(p=>(String(p.id) == String(valueAddon.item_id)));
									
									if (!_.isNil(addonItem)){
										addon_id = dataAddon.id;
										option_id = addonItem.id;										
										item_id = null;
										price = !_.isNil(addonItem.price) ? addonItem.price : 0;
									}
								}

								if (!_.isNil(addonItem)){
									foundAddon = true;
									break
								}
							}
							
							if (foundAddon){
								passedActions.addons.push({
									addon_id: addon_id,
									option_id: option_id,
									item_id: item_id,
									price: price,
									unmatched: true,
									uuid: _.uuid(),
								})
							}
						})

						let specialValues = _.jsonClone(action.values.special);
						if (!_.isEmptyArray(specialValues)){
							let specialUuid = _.uuid();
							specialValues.forEach((specialValues)=>{							
								passedActions.addons.push({
									addon_id: "bucket",
									item_id: specialValues.item_id,
									option_id: specialValues.item_id,
									quantity: specialValues.quantity,
									unmatched: true,
									uuid: specialUuid + "_" + specialValues.item_id, 
									price: 0
								})
							})
						}
					}

					if (!_.isEmptyArray(passedActions.addons)){						
						passedActions.values = null;
					}
				}
			}
			
			return {...state, ...passedActions};
		
		
		default:
			return state;
	}
};

export default modalReducer