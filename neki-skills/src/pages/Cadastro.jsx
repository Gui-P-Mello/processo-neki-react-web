import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import "../pages/Cadastro.css"

const validationPost = yup.object().shape({
    nome: yup
        .string()
        .required("Preencha com o seu nome.")
        .max(40, "Até 40 caractéres."),
    login: yup
        .string()
        .required("Preencha com o seu email.")
        .max(30, "Até 30 caractéres.")
        .email("Preencha com um endereço de email válido"),
    senha: yup
        .string()
        .required("Preencha com a sua senha.")
        .min(8,"A senha precisa ter um mínimo de 8 caractéres.")
        .max(16, "Até 11 caractéres.")
        .test('passwords-match', 'As senhas não coincidem', function(value) {
            const { confirmarSenha } = this.parent;
            return value === confirmarSenha;
        }),
    confirmarSenha: yup
        .string()
        .required("Confirme sua senha.")
        .oneOf([yup.ref('senha'), null], "As senhas não coincidem.")

  });


export default function Cadastro(){

    const[senha, setSenha] = useState("");
    const[mostrarSenha, setMostrarSenha] = useState(false);
    const[mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
    const[senhaConfirmada, setSenhaConfirmada] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ 
        mode: "onBlur",
        reValidateMode: "onChange",
        resolver: yupResolver(validationPost) 
    });
    
    const hasErrors = Object.keys(errors).length > 0;

    return(<div>
        <div className="FormContainer">
            <div className="FormHeader">
                <h1>Cadastro: </h1>
            </div>
                <form  className="CadastroForm" onSubmit={handleSubmit}>
                    <div className="Campo">
                        <label htmlFor="nome" className="">Nome: </label>
                        <input type = "text" id = "nome" {...register("nome")}/>
                        {errors.nome && <p>{errors.nome.message}</p>}
                    </div>

                    <div className="Campo">
                        <label htmlFor="login" className="" onChange={senha => setSenha(senha.target.value)}>Email: </label>
                        <input type = "text" id = "login" {...register("login")}/>
                        {errors.login && <p>{errors.login.message}</p>}
                    </div>

                    <div className="Campo">
                        <label htmlFor="senha" className="">Senha: </label>
                        <input type={mostrarSenha ? "text" : "password"} id="senha" {...register("senha")}/>
                        {errors.senha && <p>{errors.senha.message}</p>}
                    </div>

                    <div className="Campo">
                        <label htmlFor="confirmarSenha" className="">Confirmar senha: </label>
                        <input type={mostrarConfirmarSenha ? "text" : "password"} id="confirmarSenha" {...register("confirmarSenha")}/>
                        {errors.confirmarSenha && <p>{errors.confirmarSenha.message}</p>}
                    </div>

                    <button type="submit" disabled={hasErrors?true:false}>Salvar</button>
                </form>
            
        </div>
        
        
    </div>);
}