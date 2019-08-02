import { BasicInformation } from 'src/app/models';

export interface State {
  basicInfo: BasicInformation,
  count: number;
}

export const initialState: State = {
  basicInfo: {
    brokerName: '',
    address: ''
  },
  count: 0
};