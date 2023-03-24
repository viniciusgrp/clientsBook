import { api } from "../../services/api";
import { ModalDeleteStyle } from "./style"
import { Dispatch, SetStateAction } from "react";

interface IProps {
    setShowModal: Dispatch<SetStateAction<boolean>>;
    id: number;
    clientOrContact: string;
}

export const ModalDelete = ({id, setShowModal, clientOrContact}:IProps) => {
    const deleteClient = async () => {
        if (clientOrContact === 'client'){
            try {
                const token = localStorage.getItem("@TOKEN");
                api.defaults.headers.common = { Authorization: `bearer ${token}` };
                const {data} = await api.delete(`/clients/${id}`)
                setShowModal(false)
            } catch (error) {
                console.log(error)
            }
        }
        else {
            try {
                const token = localStorage.getItem("@TOKEN");
            api.defaults.headers.common = { Authorization: `bearer ${token}` };
            const {data} = await api.delete(`/contacts/${id}`)
            setShowModal(false)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <ModalDeleteStyle>
            <div>
            <h2>Confirma a exclusão?</h2>
            <button className="closeModal" onClick={() => setShowModal(false)}>X</button>
            <button onClick={() => deleteClient()}>Deletar</button>
            </div>
        </ModalDeleteStyle>
    )
}