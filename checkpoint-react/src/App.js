import './App.css';

function App() {
  return (
    <form class="row g-4">
      <h1 class="text-center">Formulaire d'Inscription</h1>
      <div class="col-md-5">
        <label for="name" class="form-label">Nom : </label>
        <input type="text" class="form-control" id="name" placeholder="Votre Nom" required/>
      </div>
      <div class="col-md-5">
        <label for="prenom" class="form-label">Prénom</label>
        <input type="text" class="form-control" id="prenom" placeholder="Votre Prénom" required/>
      </div>
      <div class="col-md-5">
        <label for="email" class="form-label">Email</label>
        <div class="input-group">
          <span class="input-group-text" >@</span>
          <input type="email" class="form-control" id="email" placeholder="Votre Email" required/>
        </div>
      </div>
      <div class="col-md-5">
        <label for="password" class="form-label">Mot de Passe</label>
        <input type="password" class="form-control" id="password" placeholder="Votre mot de passe" required/>
      </div>
      <div class="col-md-12">
        <button class="btn btn-primary w-100" type="submit">S'inscrire</button>
      </div>
</form>
  );
}

export default App;
