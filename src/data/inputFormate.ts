import type { FormFormate} from "../interface/inputFormate";

export const inputFormate:FormFormate[] = [
    {id: '2', name: 'Name', label: 'CARDHOLDER NAME', placeholder: 'e.g. Jane Applesed', inputType: 'text'},
    {id: '1', name: 'CardNumber', label: 'CARD NUMBER', placeholder: 'e.g. 1234 5678 9123 0000', inputType: 'text', max: 16},
    {id: '3', name: 'ExperationDateDay', placeholder: 'MM', inputType: 'text', max: 2},
    {id: '4', name: 'ExperationDateYear', placeholder: 'YY', inputType: 'text', max: 2},
    {id: '5', name: 'Cvc' , label:'CVC', placeholder: 'e.g. 123', inputType: 'text', max: 3}
]

