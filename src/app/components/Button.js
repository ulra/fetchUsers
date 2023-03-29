import Link from "next/link";

const Button = () => {

    return (
        <div>
            <Link href='/'>
            <button type="button" className="btn btn-outline-dark" style={{ borderRadius:'5px', padding: '3px'}}>
            <span class="material-symbols-outlined" style={{color:'#333'}}>home</span>
            </button>
            </Link>
        </div>
    );
}

export default Button;
