import Image from "next/image";
import Link from "next/link";

const Card = (props) => {

    const styleCardUser = {
        width: '30%'
    }

    return (
        <div className="containe">
            <div className="row">
            {props.users.map(user => (
               <div className="card mb-3 m-2 mx-auto"  key={user.id}>
  <h5 className="card-header">{user.first_name} {user.last_name}</h5>
  <div className="card-body">
  </div>
    <Image className="mx-auto" src={user.avatar} alt={user.first_name} width={100} height={100} style={{borderRadius: '50%'}} />
  <div className="card-body">
    <h5 className="card-text">Email: <h6>{user.email}</h6></h5>
  </div>
  
  <div className="card-body">
        <Link href={`/${user.id}`}>
        <button type="button" className="btn btn-primary" style={{ width:'100%'}}>Perfil</button>
        </Link>
  </div>
  
</div>
            ))}
        </div>
        </div>
    );
}

export default Card;
