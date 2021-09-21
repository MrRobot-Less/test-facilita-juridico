import {initializeApp} from 'firebase/app'
import { 
    getFirestore,
    addDoc,
    query,
    collection,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc,
    getDocs
} from 'firebase/firestore'
import firebaseConfig from './config/firebaseConfig'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default {
    addUser : (data) => {
        let ref = collection(db, "/users")
        addDoc(ref, data)
    },

    deleteUser : (id) => {
        let user = doc(db, '/users', id)
        deleteDoc(user)
    },

    updateUser : (id, dataUser) => {
        let user = doc(db, '/users', id)
        updateDoc(user, dataUser)
        
    },

    getListUsers : (setList) => {
        onSnapshot(
            collection(db, '/users'),
            (snapshot) => {
                let listUsers = []
                setList([])
                snapshot.docs.forEach(s => {
                    
                    listUsers.push({id:s.id,...s.data()})
                })
                setList(listUsers)
            
            })   
    },
    searchContact : async (contact, setList) => {
        let q = await getDocs(query(collection(db, '/users')))
        let listContact = []
        setList([])
        contact = contact.toLocaleLowerCase()

        q.docs.map(s => {
            let snap = s.data()
            let {name, phone} = snap
            
            name = name.toLocaleLowerCase()
            let phoneString = phone.toString()
            if(name.indexOf(contact) > -1){
                listContact.push({id:s.id,...snap})
            }
            else if(phoneString.indexOf(contact) > -1){
                listContact.push({id:s.id,...snap})
            }
        })
        setList(listContact)
    }

}