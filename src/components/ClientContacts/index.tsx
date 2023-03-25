import { Header } from "../Header"
import { ClientContactsStyle } from "./style"
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin2Line } from "react-icons/ri";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { ModalClient } from "../ModalClient";
import { ModalDelete } from "../ModalDelete";
import { Link } from "react-router-dom";

interface IProps {
    clientId: string;
}

export const ClientContacts = ({clientId, setPage}: any) => {
      const [typeModal, setTypeModal] = useState("");
        const [showModal, setShowModal] = useState<boolean>(false);
          const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
            const [contacts, setContacts] = useState<any>([]);
            const [contactId, setContactId] = useState(999)

    const getClients = async () => {
        try {
           
        const {data} = await api.get(`/contacts/${clientId}`)
        setContacts(data)
        console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getClients()
    },[clientId, showModal, showDeleteModal])

    return (
        <ClientContactsStyle>
            {showModal && (
        <ModalClient setShowModal={setShowModal} typeModal={typeModal} contactOrClient="contact" clientId={typeModal === 'add' ? clientId : contactId} clients={contacts}/>
      )}
      {showDeleteModal && (
        <ModalDelete clientOrContact="contact" setShowModal={setShowDeleteModal} id={contactId} />
      )}
            <Header buttons={[{text: "Sair", path: "/login"}]}/>
            <main>
                <button className="backButton" onClick={() => setPage("client")}>Voltar</button>
                <button onClick={() => {
                    setTypeModal("add")
                    setShowModal(true)
                }}>Adicionar contato</button>
                <ul>
                    <li className="clientLi"><p>Nome</p>
                    <p>Email</p>
                    <p>Telefone</p>
                    <p>LinkedIn</p>
                    <p>Editar</p>
                    <span>Excluir</span>
                    </li>
                    {contacts.map((contact: any) => {
                        return (
                            <li className="clientLi">
                        <p>{contact.name}</p>
                        <p>{contact.email}</p>
                        <p>{contact.telephone}</p>
                        <a target={"_blank"} href={`https://linkedin.com/in/${contact.linkedin}`}>
                          {`LinkedIn/${contact.linkedin}`}
                        </a>
                        <p onClick={() => {
                            setShowModal(true)
                            setTypeModal("edit")
                            setContactId(contact.id)
                        }} className="contactBook"><AiOutlineEdit/></p>
                        <span onClick={() => {
                            setContactId(contact.id)
                            setShowDeleteModal(true)
                        }} className="contactBook"><RiDeleteBin2Line/></span>
                    </li>
                        )
                    })}
                </ul>
            </main>
        </ClientContactsStyle>
    )
}