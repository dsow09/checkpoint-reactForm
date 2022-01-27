import './App.css';

function App() {
  return (
    <form className="row g-4">
      <h1 className="text-center">Formulaire d'Inscription</h1>
      <div className="col-md-5">
        <label for="name" className="form-label">Nom : </label>
        <input type="text" className="form-control" id="name" placeholder="Votre Nom" required/>
      </div>
      <div className="col-md-5">
        <label for="prenom" className="form-label">Prénom</label>
        <input type="text" className="form-control" id="prenom" placeholder="Votre Prénom" required/>
      </div>
      <div className="col-md-5">
        <label for="email" className="form-label">Email</label>
        <div className="input-group">
          <span className="input-group-text" >@</span>
          <input type="email" className="form-control" id="email" placeholder="Votre Email" required/>
        </div>
      </div>
      <div className="col-md-5">
        <label for="password" className="form-label">Mot de Passe</label>
        <input type="password" className="form-control" id="password" placeholder="Votre mot de passe" required/>
      </div>
      <div className="col-md-12">
        <button className="btn btn-primary w-100" type="submit">S'inscrire</button>
      </div>
</form>
  );
}

export default App;
