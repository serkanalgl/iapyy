import { Card, Container, Grid, Spacer, Text } from "@nextui-org/react";

export default function Features(){
    return (
        <Container fluid  css={{background:'#FFFCE6', mt:"$24" , pt:"$24"}}>
            <Text
            size="$4xl"
            css={{
                fontWeight: "600",
                textAlign: "center",
                lineHeight: "var(--nextui-lineHeights-sm)",
            }}
            >
            “One Price Fits All”
            </Text>
            <Text
            size="$4xl"
            css={{
                fontWeight: "600",
                textAlign: "center",
                lineHeight: "var(--nextui-lineHeights-sm)",
            }}
            >
            pricing and promotional strategy 
            </Text>
            <Text
            size="$4xl"
            css={{
                fontWeight: "600",
                textAlign: "center",
                lineHeight: "var(--nextui-lineHeights-sm)",
            }}
            >
            is highly ineffective.
            </Text>
            <Container xs>
            <Spacer y={1} />
            <Text
                h4
                size="$md"
                css={{
                fontWeight: "400",
                textAlign: "center",
                lineHeight: "var(--nextui-lineHeights-md)",
                }}
            >
                The reason is simple: customers are not all the same. 
                They belong to highly differentiated market segments with varied habits, incomes, interests, and expectations.
            </Text>
            <Spacer y={3} />
            <Grid.Container gap={5}>
                <Grid 
                xs={12} 
                css={{transform: "rotate(-3deg)"}}
                justify="flex-start">
                    <Card isHoverable variant="bordered" css={{ px: "$10", py: "$10" }}>
                    <Card.Header css={{pt: "$5", pb: "0"}}>
                        <Text b>We collect data</Text>
                    </Card.Header>
                    <Card.Body>
                        <Text>
                        GDP, Big Mac Index, Exchange rates, Unemployment rate.
                        Those are all measures that have influence on many of the major factors in our lives including our health,
                        how much we earn, our economic stability.
                        </Text>
                    </Card.Body>
                    </Card>
                </Grid>
                <Grid 
                xs={12} 
                justify="flex-end">
                    <Card isHoverable variant="bordered" css={{ px: "$10", py: "$10" }}>
                    <Card.Header css={{pt: "$5", pb: "0"}}>
                        <Text b>We processing data</Text>
                    </Card.Header>
                    <Card.Body>
                        <Text>
                        We train and process data from a variety of sources 
                        (third-party sites, government data, the economist etc.. )
                        </Text>
                    </Card.Body>
                    </Card>
                </Grid>
                <Grid 
                xs={12} 
                justify="flex-start"
                css={{transform: "rotate(-3deg)"}}>
                    <Card isHoverable variant="bordered" css={{ px: "$10", py: "$10" }}>
                    <Card.Header css={{pt: "$5", pb: "0"}}>
                        <Text b>We serve data</Text>
                    </Card.Header>
                    <Card.Body>
                        <Text>
                        We serve data that enables you to query it. 
                        We&apos;ve done some stuff like this for both.
                        </Text>
                    </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
            </Container>
            <Spacer y={3} />
      </Container>
    )

}