import { Container, Text, Link } from "@nextui-org/react";

export default function Footer() {
    return(
        <footer>
            <Container fluid justify="center" css={{py:"$18"}}>
            <Text
                size="lg"
                css={{
                fontWeight: "500",
                textAlign: "center"
                }}
            >
                <Link isExternal color="text" css={{margin: '0 auto;'}} href="https://github.com/serkanalgl">© IAPPY | Contact me</Link>
            </Text>
            
            </Container>
      </footer>
    )
}