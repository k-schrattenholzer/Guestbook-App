import EntryList from '../../components/EntryList/EntryList'
import Guestbook from '../../components/GuestBook/Guestbook'
import { EntryProvider } from '../../context/EntryContext'

const Home = () => {
  return (
    <EntryProvider>
      <Guestbook />
      <EntryList />
    </EntryProvider>
  )
}

export default Home;

// TO DO 
// will import entrylist and guestbook, as well as entry provider
// declare a component that returns the guest book and list wrapped in the entryprovider