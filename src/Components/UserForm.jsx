

const UserForm = (props) => {
    // These are the attributes of an item I am making
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
       //preventDefault, keeps the page from refreashing
        e.preventDefault();
        const newUser = { firstname, lastname, email, password }; 
        console.log("User info ", newUser);
        setHasBeenSubmitted(true);
    }

    const formMessage = () => {
        if(hasBeenSubmitted){
            return "Thank you for submitting your form, we will contact you within 24 hours";
        }else {
            return "Please submit your info for a quote";
        }
    }

    const textValid = input => {
       if(input.length < 2) {
           return false; 
       }else {
           return true;
       }
   }

    

  
    return(

        <>
        
            <form onSubmit={createUser}>
                <div>
                    <h3>{ formMessage() }</h3>
                </div>
                <div>
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" name="firstname" id="firstname" className="form-control" onChange={e => setFirstname(e.target.value)} />
                    {textValid(firstname) ? "" : <p class="text-danger">First Name is required!</p>}
                </div>

                <div>
                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" name="lastname" id="lastname" className="form-control" onChange={e => setLastname(e.target.value)} />
                    {textValid(lastname) ? "" : <p class="text-danger">Last Name is required!</p>}
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" className="form-control" onChange={e => setEmail(e.target.value)} />
                    {textValid(email) ? "" : <p class="text-danger">Email is required!</p>}
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" onChange={e => setPassword(e.target.value)
                    } />
                    {password.length <8? <p className="text-danger">Password must be at least 8 charcters</p> : <p></p>}
                </div>

                <div>
                    <label htmlFor="confPassword">Confirm Password:</label>
                    <input type="password" className="form-control" onChange={e => setConfPassword(e.target.value)}/>
                    {confPassword !== password? <p className="text-danger">Passwords must match</p> : <p></p>}
                </div>

                <button type="submit" class="btn btn-outline-success mt-3" >Submit</button>
                {/* <input type="submit" value="Submit" className="form-control" /> */}
            </form>
        
        <div>
            <h4>First Name: {firstname} </h4>
            <h4>Last Name: {lastname}</h4>
            <h4>Email: {email}</h4>
        </div>
        </>
        
    );
}

export default UserForm;