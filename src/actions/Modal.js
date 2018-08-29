const updateModal = (state)=>{
  return {
      type: "SET_MODAL_DESKTOP",
      template: state.template,
      serviceid: state.serviceid,
      data: state.data,
      values: state.values,
      itemId: state.itemId,
      itemQuantity: state.itemQuantity,
      addons: state.addons
    }
}

export function showModal(state){
  return (dispatch)=>{
    dispatch(updateModal({
      template: state.template,
      serviceid: state.serviceid,
      data: null,
      values: state.values,
      itemId: state.itemId,
      itemQuantity: state.itemQuantity,
      addons: null
    }))
  } 
}

export function hideModal(){
  return (dispatch)=>{
    dispatch(updateModal({
      template: null,
      serviceid: null,
      data: null,
      values: null,
      itemId: null,
      itemQuantity: null,
      addons: null
    }))
  } 
}