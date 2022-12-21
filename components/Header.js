import { Navbar, Button, Text, Link } from "@nextui-org/react";

export default function Header() {
    return(
        <Navbar variant="floating" maxWidth="sm" css={{ borderRadius: "40px", paddingTop:"14px"}}>
            <Navbar.Brand>
                <Link href="#">
                    <Text size={"$xl"} style={{fontFamily:"Monoton"}}>
                        IAPYY
                    </Text>
                </Link>
            </Navbar.Brand>
      </Navbar>  
    )
}