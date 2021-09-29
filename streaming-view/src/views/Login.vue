<template>
  <div>
    <img src="../assets/LogoStreaming.png" alt />
    <div class="login">
      <b-form @submit="doLogin">
        <b-form-group
          id="user-label"
          label="Email: "
          label-for="user-input"
          label-aling="left"
          description="Digite um email cadastrado:"
        >
          <b-form-input
            id="user-input"
            v-model="login.user"
            type="email"
            required
            placeholder="Digite o email"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="password-label"
          label="Senha: "
          label-for="password-input"
          label-aling="left"
          description="Digite uma senha válida:"
        >
          <b-form-input
            id="password-input"
            v-model="login.pwd"
            type="password"
            required
            placeholder="Digite a senha"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit">Entrar</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      login: {
        user: "user@email.com",
        senha: "123",
      },
    };
  },

  methods: {
    doLogin() {
      let dataLogin = {
        user: this.login.user,
        pwd: this.login.senha,
      };
      this.$http
        .post("/api/login", dataLogin)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((errors) => {
          console.log("Falha no login");
          console.log(errors);
        });
    },
  },
};
</script>

<style>
.login {
  margin: 50px 350px 0px 350px;
  padding: 50px 350px 10px 350px;
  border-radius: 10px;
  background-color: #CCC;
}
.login button {
  background-color: rgb(98, 202, 202);
  border-color: gray;
}
</style>