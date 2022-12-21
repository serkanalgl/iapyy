import { Button, Grid, Container, Dropdown, Input, Table, Spacer, Loading } from "@nextui-org/react";
import { useMemo, useState } from "react";

const countries = [
    { name: 'United States', code: 'USA' },
    { name: 'Argentina', code: 'ARG' },
    { name: 'Australia', code: 'AUS' },
    { name: 'Azerbaijan', code: 'AZE' },
    { name: 'Bahrain', code: 'BHR' },
    { name: 'Brazil', code: 'BRA' },
    { name: 'Britain', code: 'GBR' },
    { name: 'Canada', code: 'CAN' },
    { name: 'Chile', code: 'CHL' },
    { name: 'China', code: 'CHN' },
    { name: 'Colombia', code: 'COL' },
    { name: 'Costa Rica', code: 'CRI' },
    { name: 'Croatia', code: 'HRV' },
    { name: 'Czech Republic', code: 'CZE' },
    { name: 'Egypt', code: 'EGY' },
    { name: 'Guatemala', code: 'GTM' },
    { name: 'Honduras', code: 'HND' },
    { name: 'Hong Kong', code: 'HKG' },
    { name: 'Hungary', code: 'HUN' },
    { name: 'India', code: 'IND' },
    { name: 'Indonesia', code: 'IDN' },
    { name: 'Israel', code: 'ISR' },
    { name: 'Japan', code: 'JPN' },
    { name: 'Jordan', code: 'JOR' },
    { name: 'Kuwait', code: 'KWT' },
    { name: 'Malaysia', code: 'MYS' },
    { name: 'Mexico', code: 'MEX' },
    { name: 'Moldova', code: 'MDA' },
    { name: 'New Zealand', code: 'NZL' },
    { name: 'Nicaragua', code: 'NIC' },
    { name: 'Norway', code: 'NOR' },
    { name: 'Oman', code: 'OMN' },
    { name: 'Pakistan', code: 'PAK' },
    { name: 'Peru', code: 'PER' },
    { name: 'Philippines', code: 'PHL' },
    { name: 'Poland', code: 'POL' },
    { name: 'Qatar', code: 'QAT' },
    { name: 'Romania', code: 'ROU' },
    { name: 'Saudi Arabia', code: 'SAU' },
    { name: 'Singapore', code: 'SGP' },
    { name: 'South Africa', code: 'ZAF' },
    { name: 'South Korea', code: 'KOR' },
    { name: 'Sri Lanka', code: 'LKA' },
    { name: 'Sweden', code: 'SWE' },
    { name: 'Switzerland', code: 'CHE' },
    { name: 'Taiwan', code: 'TWN' },
    { name: 'Thailand', code: 'THA' },
    { name: 'Turkey', code: 'TUR' },
    { name: 'United Arab Emirates', code: 'ARE' },
    { name: 'Uruguay', code: 'URY' },
    { name: 'Vietnam', code: 'VNM' }
];

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Prices() {

    const [sourceCountry, setSourceCountry] = useState(new Set(["USA"]));
    const [amount, setAmount] = useState(100);
    const [isLoading, setLoading] = useState(false);
    const [prices, setPrices] = useState(null);

    const selectedSourceCountry = useMemo(
        () => Array.from(sourceCountry).join(", "),
        [sourceCountry]
    );

    async function handleSubmit(){
        setLoading(true);
        fetch(`/api/prices?sourceCountry=${selectedSourceCountry}`)
            .then((res) => res.json())
            .then((data) => {
                data.map((d)=> {
                    const numberFormatter = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: d.currency_code,
                    });
                    d.price = numberFormatter.format(d.price_index * amount);
                    return d;
                });
                setPrices(data);
                setLoading(false);
            }).catch((e)=>{
                setLoading(false);
            });
    }
    
    return(
        <>
            <Container xs>
                <Grid.Container gap={0} justify="center">
                    <Grid xs={12} sm={8} justify="center" css={{pt: "$4"}}>
                    <Input
                        required
                        underlined
                        size="xl"
                        shadow={false}
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        type="number"
                        aria-label="Amount"
                        contentRightStyling={false}
                        contentRight={
                        <Container
                            css={{
                            paddingRight: "0.5rem",
                            }}
                        >
                            <Dropdown>
                            <Dropdown.Button light>{selectedSourceCountry}</Dropdown.Button>
                            <Dropdown.Menu 
                                aria-label="Country"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={sourceCountry}
                                onSelectionChange={setSourceCountry}>
                                {
                                countries.map((country) => (
                                    <Dropdown.Item key={country.code}>{country.name}</Dropdown.Item>
                                ))
                                }
                            </Dropdown.Menu>
                            </Dropdown>
                        </Container>
                        }
                    />
                    </Grid>
                    <Grid xs={12} sm={4} justify="center" css={{pt: "$4"}}>
                    <Button
                        css={{
                        borderRadius: "$xl",
                        border: "$space$1 solid rgba(255,221,0,1)",
                        background: "rgba(255,221,0,1)",
                        color: "#242424",
                        height: "$17",
                        fontWeight: 600,
                        fontSize: "var(--nextui-fontSizes-md)",
                        "&:hover": {
                            background: "rgba(255,221,0,0.9)",
                        },
                        "&:active": {
                            background: "rgba(255,221,0,0.8)",
                        },
                        "&:focus": {
                            background: "rgba(255,221,0,0.9)",
                        },
                        }}
                        disabled={isLoading}
                        onPress={handleSubmit}
                    >
                        {
                            isLoading ? (
                                <Loading color="currentColor" size="sm" />
                            ) : <>Optimize</>
                        }  
                    </Button>
                    </Grid>
                </Grid.Container>
            </Container>
            {
                prices && (
                    <Container sm>
                        <Spacer y={2} />
                        <Table
                            bordered
                            shadow="false"
                            aria-label="Prices content"
                            css={{
                                height: "auto",
                                minWidth: "100%",
                            }}
                            >
                            <Table.Header>
                                <Table.Column key="country_code"></Table.Column>
                                <Table.Column key="country_name">Country</Table.Column>
                                <Table.Column key="price">Price</Table.Column>
                            </Table.Header>
                            <Table.Body items={prices}>
                                {(item) => (
                                <Table.Row key={item.country_code}>
                                    {
                                    (columnKey) => 
                                        <Table.Cell>
                                            <span style={{cursor: "text", userSelect: "text"}}>
                                                {item[columnKey]}
                                            </span>
                                        </Table.Cell>
                                    }
                                </Table.Row>
                                )}
                            </Table.Body>
                            </Table>
                    </Container>
                )
            }
        </>
       
    )
}