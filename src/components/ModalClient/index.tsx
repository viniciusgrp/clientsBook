import axios from "axios";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { ModalClientStyle } from "./style";
import { Dispatch, SetStateAction, useEffect } from "react";

interface IProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  typeModal: string;
  clientId: number;
  clients: any;
  contactOrClient: string;
}

export const ModalClient = ({ setShowModal, typeModal, clientId, clients, contactOrClient }: IProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const addClient = async (body: any) => {
    if (contactOrClient === 'client') {
        try {
            const token = localStorage.getItem("@TOKEN");
            api.defaults.headers.common = { Authorization: `bearer ${token}` };
            const { data } = await api.post("/clients", body);
            setShowModal(false);
          } catch (error) {
            console.log(error);
          }
    } else {
        try {
            const token = localStorage.getItem("@TOKEN");
            api.defaults.headers.common = { Authorization: `bearer ${token}` };
            const { data } = await api.post(`/contacts/${clientId}`, body);
            setShowModal(false);
          } catch (error) {
            console.log(error);
          }
    }
  };

  const getClient = async () => {
    if (typeModal !== "add") {
      const client = clients.find((elem: any) => elem.id === clientId)
      console.log(client)
      setValue("email", client.email);
      setValue("name", client.name)
      setValue("telephone", client.telephone)
      setValue("linkedin", client.linkedin)
    }
  };

  useEffect(() => {
    getClient();
  }, [typeModal]);

  const editClient = async (body: any) => {
    if (contactOrClient === 'client') {
        try {
            const token = localStorage.getItem("@TOKEN");
            api.defaults.headers.common = { Authorization: `bearer ${token}` };
            const { data } = await api.patch(`/clients/id/${clientId}`, body);
            setShowModal(false);
          } catch (error) {
            console.log(error);
          }
    } else {
        try {
            const token = localStorage.getItem("@TOKEN");
            api.defaults.headers.common = { Authorization: `bearer ${token}` };
            const { data } = await api.patch(`/contacts/${clientId}`, body);
            setShowModal(false);
          } catch (error) {
            console.log(error);
          }
    }
  };

  return (
    <ModalClientStyle>
      <div className="formDiv">
        <form
          onSubmit={
            typeModal === "add"
              ? handleSubmit(addClient)
              : handleSubmit(editClient)
          }
        >
          {typeModal === "add" ? (
            <h2>Adicionar cliente</h2>
          ) : (
            <h2>Editar cliente</h2>
          )}
          <button onClick={() => setShowModal(false)} className="closeModal">
            X
          </button>
          <label htmlFor="name">Nome</label>
          <input
            type="name"
            id="name"
            placeholder="Nome"
            {...register("name", { required: true })}
          ></input>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", { required: true })}
          ></input>
          <label htmlFor="telephone">Telefone</label>
          <input
            type="telephone"
            {...register("telephone", { required: true })}
            id="telephone"
            placeholder="telephone"
          ></input>
          <label htmlFor="linkedin">LinkedIn</label>
          <input
            type="linkedin"
            {...register("linkedin", { required: true })}
            id="linkedin"
            placeholder="Apenas o @ do perfil"
          ></input>
          {typeModal === "add" ? (
            <button type="submit">Adicionar</button>
          ) : (
            <button type="submit">Editar</button>
          )}
        </form>
      </div>
    </ModalClientStyle>
  );
};
