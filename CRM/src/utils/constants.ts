
import { Dimensions, Platform } from 'react-native';
import { AgentsIcon, CallCenterIcon, ContactsIcon, FolderIcon, MarketingIcon, PropertiesIcon, RetalorsIcon, SelfSourcedIcon, SurfIconIcon, TransactionIcons, UsersIconIcon } from './assets';

export const WINDOW_DEVICE_WIDTH = Dimensions.get('window').width;
export const WINDOW_DEVICE_HEIGHT = Dimensions.get('window').height;

export const CURRENT_TIME = 'CURRENT_TIME';

export const sideMenuOptions = [
    { label: "Dashboard  ", value: 1, image: SurfIconIcon },
    { label: "Contacts  ", value: 2, image: ContactsIcon },
    { label: "surf Leads", value: 3, image: UsersIconIcon },
    { label: "Self-sourced Leads", value: 4, image: SelfSourcedIcon },
    { label: "Transactions", value: 5, image: TransactionIcons },
    { label: "Document Portal", value: 6, image: FolderIcon },
    { label: "surf MLP", value: 7, image: PropertiesIcon },
    { label: "Call Center", value: 8, image: CallCenterIcon },
    { label: "Agents", value: 9, image: AgentsIcon },
    { label: "Realtors", value: 10, image: RetalorsIcon },
    { label: "Marketing", value: 11, image: MarketingIcon },
];


