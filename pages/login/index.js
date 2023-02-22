import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export default function Login() {
  const router = useRouter();
  const { register, handleSubmit, getValues } = useForm();
  function onSubmit({ username, password }) {
    const formData = new FormData();
    formData.append("email", getValues("un"));
    formData.append("password", getValues("pw"));
    const res = fetch("http://u01-backoffice.fundpark.online:90/api/auth/login", {
      method: "POST",
      body: formData
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        if (result.message != "Unauthenticated") {
            router.push("/")
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="col-md-6 offset-md-3 mt-5">
      <div className="card">
        <h4 className="card-header">Login Page</h4>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Username</label>
              <input name="username" type="text" {...register("un")} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input name="password" type="password" {...register("pw")}/>
            </div>
            <button className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
