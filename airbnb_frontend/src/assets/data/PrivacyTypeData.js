import { BsHouseDoor } from "react-icons/bs";
import { PiDoorOpenThin } from "react-icons/pi";
import { ReactComponent as SharedHome } from './../icon/SharedHome.svg'

export const privacyType = [
    {
        label: 'An entire place',
        icon: BsHouseDoor,
        description: 'Guests have the whole place to themselves',
    },
    {
        label: 'A room',
        icon: PiDoorOpenThin,
        description: 'Guests have their own room in a home, plus access to to shared space'
    },
    {
        label: 'Shared room',
        icon: SharedHome,
        description: 'Guest sleep in a room or common area that maybe shared with you or others.'
    }
]