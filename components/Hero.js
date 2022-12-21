import { Navbar, Button, Text, Link, Container, Spacer } from "@nextui-org/react";

export default function Hero() {
    return(
        <Container sm>
            <Spacer y={2.75} />
            <Text
                size="$6xl"
                css={{
                    fontWeight: "600",
                    textAlign: "center",
                    marginTop: "3rem",
                    lineHeight: "var(--nextui-lineHeights-sm)",
                }}
                >
                Optimize IAP prices on
            </Text>
            <Text
                size="$6xl"
                css={{
                    fontWeight: "600",
                    textAlign: "center",
                    lineHeight: "var(--nextui-lineHeights-sm)",
                }}
                >
                a per-country basis
            </Text>
            <Spacer y={1} />
            <Container xs>
                <Text
                    h4
                    size="$lg"
                    css={{
                        fontWeight: "400",
                        textAlign: "center",
                        lineHeight: "var(--nextui-lineHeights-md)",
                    }}
                >
                    Our tool uses machine learning to optimize in-app purchase prices
                    for every country in the world.
                </Text>
            </Container>
            <Spacer y={2.5} />
        </Container>
    )
}