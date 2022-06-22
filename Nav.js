import Link from "next/link";
export default function Nav(){

    return(

            <nav>
                
               <Link href="/products"> Productos </Link>
               <Link href="/orders"> Pedidos </Link>
               <Link href="/account"> Cuenta </Link>
               <Link href= "/sell"> Ventas </Link>
          
            </nav>

    );


}