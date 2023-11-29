interface AddProductAction{
    type : "add",
    id : number,
}

interface RemoveProductAction{
    type : "remove",
    id : number,
}

export type ProductAction = AddProductAction | RemoveProductAction
