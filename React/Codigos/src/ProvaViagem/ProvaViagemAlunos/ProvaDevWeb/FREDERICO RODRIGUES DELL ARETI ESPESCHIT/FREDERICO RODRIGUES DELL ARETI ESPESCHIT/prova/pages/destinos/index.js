import * as React from "react";
import { Box, Image, Flex, Badge, Text } from "@chakra-ui/react";

import "./style.scss";

function Destinos() {
    return (
        <div className="container">
            <div className="city">
                <Box p="5" maxW="320px">
                    <Image boxSize="380px" objectFit="cover" src="https://bit.ly/3oyLgts" />
                    <Flex align="baseline">
                        <Badge>Cidade: </Badge>
                        <Text ml={2} textTransform="uppercase" fontWeight="bold">
                            Belo Horizonte &bull; MG
                        </Text>
                    </Flex>
                    <Text mt={2}>
                        Belo Horizonte é um município brasileiro e a capital do estado de Minas Gerais. Sua população estimada pelo IBGE para 1.º de julho de 2021 era de 2 530 701 habitantes, sendo o sexto município mais populoso do país, o
                        terceiro da Região Sudeste e primeiro de seu estado.
                    </Text>
                </Box>
            </div>

            <div className="city">
                <Box p="5" maxW="320px">
                    <Image boxSize="380px" objectFit="cover" src="https://bit.ly/30pPaMs" />
                    <Flex align="baseline">
                        <Badge>Cidade: </Badge>
                        <Text ml={2} textTransform="uppercase" fontWeight="bold">
                            São Paulo &bull; SP
                        </Text>
                    </Flex>
                    <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                        São Paulo é um município brasileiro, capital do estado homônimo e principal centro financeiro, corporativo e mercantil da América do Sul. É a cidade mais populosa do Brasil, do continente americano, da lusofonia e de
                        todo o hemisfério sul.
                    </Text>
                </Box>
            </div>

            <div className="city">
                <Box p="5" maxW="320px">
                    <Image boxSize="380px" objectFit="cover" src="https://bit.ly/3HemA1E" />
                    <Flex align="baseline">
                        <Badge>Cidade: </Badge>
                        <Text ml={2} textTransform="uppercase" fontWeight="bold">
                            Rio de Janeiro &bull; RJ
                        </Text>
                    </Flex>
                    <Text mt={2}>
                        Rio de Janeiro é um município brasileiro, capital do estado homônimo, situado no Sudeste do país. Maior destino turístico internacional no Brasil, da América Latina e de todo o Hemisfério Sul (em 2008),a capital
                        fluminense é a cidade brasileira mais conhecida no exterior, funcionando como um "espelho", ou "retrato" nacional, seja positiva ou negativamente.
                    </Text>
                </Box>
            </div>
        </div>
    );
}

export default Destinos;
