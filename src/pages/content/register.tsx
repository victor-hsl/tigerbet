import Content from '../../template/content'

const Register = () => {
    return(
        <Content>
            <div className="d-flex justify-content-center align-items-center my-2">
                <h2 className="display-5">Cadastre-se</h2>
            </div>
            <div className="d-flex align-items-center justify-content-center col-12">
                <form className="form-group col-9 mb-md-5">
                    <div className="form-group row mb-3 justify-content-center">
                        <label aria-for="titulo" className="col-sm-2 col-lg-2 col-form-label">Nome</label>
                        <div className="col-sm-10 col-lg-6">
                        <input type="text" className="form-control" id="titulo" placeholder="Informe o nome completo" required/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center mb-3">
                        <label aria-for="descricao" className="col-sm-2 col-lg-2 col-form-label">Nascimento</label>
                        <div className="col-sm-10 col-lg-6">
                        <input type="date" className="form-control" id="titulo" required/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center mb-3">
                        <label aria-for="descricao" className="col-sm-2 col-lg-2 col-form-label">Endereço</label>
                        <div className="col-sm-10 col-lg-6">
                        <input type="text" className="form-control" id="titulo" placeholder="Rua, Viela, Travessa, Avenida" required/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center mb-3">
                        <label aria-for="descricao" className="col-sm-2 col-lg-2 col-form-label">Nº</label>
                        <div className="col-sm-10 col-lg-6">
                        <input type="text" className="form-control" id="titulo" placeholder="Numero"/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center mb-3">
                        <label aria-for="descricao" className="col-sm-2 col-lg-2 col-form-label">Bairro</label>
                        <div className="col-sm-10 col-lg-6">
                        <input type="text" className="form-control" id="titulo" placeholder="Bairro" required/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center mb-3">
                        <label aria-for="descricao" className="col-sm-2 col-lg-2 col-form-label">E-mail</label>
                        <div className="col-sm-10 col-lg-6">
                        <input type="email" className="form-control" id="titulo" placeholder="Informe seu e-mail" required/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center mb-3">
                        <label aria-for="descricao" className="col-sm-2 col-lg-2 col-form-label">Senha</label>
                        <div className="col-sm-10 col-lg-6">
                        <input type="password" className="form-control" id="titulo" placeholder="Insira sua senha" required/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center mb-3">
                        <label aria-for="descricao" className="col-sm-2 col-lg-2 col-form-label"></label>
                        <div className="col-sm-10 col-lg-6">
                        <input type="password" className="form-control" id="titulo" placeholder="Repita a senha"/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center mb-md-5 mb-sm-2">
                            <button type="submit" className="btn btn-warning me-md-2 col-lg-2 col-sm-10" ><i className="bi bi-person-plus-fill"></i> Cadastrar</button>
                            <button type="reset" className="btn btn-outline-secondary col-lg-2 col-sm-10" ><i className="bi bi-eraser"></i> Limpar</button>
                    </div>
                </form>
            </div>
        </Content>
    )
}

export default Register;