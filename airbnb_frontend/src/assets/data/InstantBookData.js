import { ReactComponent as InstantBook } from '../icon/InstantBook/InstantBook.svg';
import { ReactComponent as Request } from '../icon/Amenities/Dryer.svg';

export const instantBookData = [
    {
        label: 'Use Instant Book',
        icon: InstantBook,
        description: 'Guests can book automatically',
        value: false,
    },
    {
        label: 'Approve or decline requests',
        icon: Request,
        description: 'Guests must ask if they can book',
        value: true,
    },

]