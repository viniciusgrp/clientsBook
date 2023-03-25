import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { DashboardStyle } from "./style";
import { BsJournalBookmark } from "react-icons/bs";
import { RiDeleteBin2Line } from "react-icons/ri";
import { ModalClient } from "../../components/ModalClient";
import { ModalDelete } from "../../components/ModalDelete";
import { AiOutlineEdit } from "react-icons/ai";
import { ClientContacts } from "../../components/ClientContacts";

interface IClient {
  id: number;
  name: string;
  email: string;
  telephone: string;
  linkedin: string;
  createdAt: string;
}

export const Dashboard = () => {
  const [clients, setClients] = useState<IClient[]>([]);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [clientId, setClientId] = useState<number>(1);
  const [typeModal, setTypeModal] = useState("");
  const [page, setPage] = useState("client");
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    const jwt = localStorage.getItem("@TOKEN") || "";
    const tokens = jwt.split(".");

    const user = JSON.parse(atob(tokens[1]));
    setUserId(user.id);
  }, []);

  const getClients = async () => {
    if (typeof userId === "string") {
      try {
        const { data } = await api.get<IClient[]>(`/clients/${userId}`);
        setClients(data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getClients();
  }, [showModal, showDeleteModal, userId]);

  return (
    <DashboardStyle>
      {page === "client" ? (
        <>
          {showModal && (
            <ModalClient
              setShowModal={setShowModal}
              typeModal={typeModal}
              contactOrClient="client"
              clientId={clientId}
              clients={clients}
            />
          )}
          {showDeleteModal && (
            <ModalDelete
              clientOrContact="client"
              setShowModal={setShowDeleteModal}
              id={clientId}
            />
          )}
          <Header buttons={[{ text: "Sair", path: "/login" }]} />
          <main>
            <button
              onClick={() => {
                setShowModal(true);
                setTypeModal("add");
              }}
            >
              Adicionar Cliente
            </button>
            <div className="contacts">
              <ul>
                <li>
                  <p>Nome</p>
                  <p>Email</p>
                  <p>Telefone</p>
                  <p>LinkedIn</p>
                  <p>Contatos</p>
                  <p>Editar</p>
                  <span>Deletar</span>
                </li>
                {clients.length ? (
                  clients.map((client: IClient) => {
                    return (
                      <li key={client.id}>
                        <p>{client.name}</p>
                        <p>{client.email}</p>
                        <p>{client.telephone}</p>
                        <a target={"_blank"} href={`https://linkedin.com/in/${client.linkedin}`}>
                          {`LinkedIn/${client.linkedin}`}
                        </a>
                        <p className="contactBook">
                          <BsJournalBookmark
                            onClick={(e) => {
                              setClientId(client.id);
                              setPage("contact");
                            }}
                          />
                        </p>
                        <p
                          className="contactBook"
                          onClick={() => {
                            setTypeModal("edit");
                            setClientId(client.id);
                            setShowModal(true);
                          }}
                        >
                          <AiOutlineEdit />
                        </p>
                        <span className="contactBook">
                          <RiDeleteBin2Line
                            onClick={() => {
                              setClientId(client.id);
                              setShowDeleteModal(true);
                            }}
                          />
                        </span>
                      </li>
                    );
                  })
                ) : (
                  <p className="noClients">Você ainda não tem clientes</p>
                )}
              </ul>
            </div>
          </main>
        </>
      ) : (
        <ClientContacts setPage={setPage} clientId={clientId} />
      )}
    </DashboardStyle>
  );
};
