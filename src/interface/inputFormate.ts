type NameType =  'Name' | 'CardNumber' |  'ExperationDateDay' | 'ExperationDateYear' | 'Cvc'

export interface FormFormate {
  id: string;
  label?: string;
  name: NameType;
  placeholder: string;
  inputType: string;
}

