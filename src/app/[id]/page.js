import Image from "next/image";

const fetchUser = (id) => {
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(res => res.json())
}

export default async function Perfil ({ params }) {

    const { id } = params
    const user = await fetchUser(id);
    const userData = user.data;

    return (
        <div className="container mt-2" key={user.id}>
                    <Image className="mx-auto" src={userData.avatar} width={150} height={150} style={{borderRadius:'50%'}}/>
                    <h3>{userData.first_name} {userData.last_name}</h3>
                    <h6><b>Email:</b> {userData.email}</h6>
                    <div class="card border-dark mb-3" style={{width:'100%'}}>
                    <div class="card-body">
                    <h4 class="card-title">Biografía</h4>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit nisi, eros sociis scelerisque aliquam metus nostra quis vehicula, justo nullam elementum mollis vestibulum pellentesque himenaeos. Pretium hac congue quam nullam quisque ad conubia hendrerit duis, sem suspendisse magnis scelerisque litora proin porttitor est consequat semper, pulvinar dapibus ante maecenas fusce eget fames convallis. Risus convallis vitae litora fringilla duis per urna tortor varius, maecenas lacinia lobortis integer dapibus nisl feugiat fames, curabitur parturient ullamcorper morbi torquent natoque velit nam. Taciti nisi tempor sociosqu parturient urna iaculis faucibus tristique nullam tincidunt, lacinia potenti neque tortor hac quisque donec nisl euismod, cras phasellus luctus maecenas elementum ornare accumsan hendrerit congue.</p>
                    </div>
                    </div>
        </div>
    );
}

