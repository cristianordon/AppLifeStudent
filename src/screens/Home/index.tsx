import React from 'react';

import {
    Container,
    Header,
    ContentWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlighCards,
    Transactions,
    Title,
    TransactionList
} from './styles';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
    id: string;
}
export function Home() {
    const transactionData: DataListProps[] = [
        {
            id: '1',
            type: 'expense',
            title: 'Mini Pizza Cantina',
            amount: 'R$ 10,00',
            category: {
                icon: 'coffee',
                name: 'Alimentação',
            },
            date: '10/03/2022'
        },
        {
            id: '2',
            type: 'expense',
            title: 'Ida IFNMG a Salinas',
            amount: 'R$ 3,00',
            category: {
                icon: 'dollar-sign',
                name: 'Transporte',
            },
            date: '07/03/2022'
        },
        {
            id: '3',
            type: 'expense',
            title: 'Compra Livro Linguagem C',
            amount: 'R$ 50,00',
            category: {
                icon: 'book',
                name: 'Livro',
            },
            date: '01/03/2022'
        }

    ];

    return (
        <Container>
            <Header>
                <ContentWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://github.com/cristianordon.png' }} />
                        <User>
                            <UserGreeting>Olá, Usuário! </UserGreeting>
                        </User>
                    </UserInfo>

                    <Icon name="logout" />
                </ContentWrapper>
            </Header>

            <HighlighCards>
                <HighlightCard
                    title='Entrada'
                    amount='R$ 300,00'
                    lastTransaction='Última entrada dia 13 de abril'
                    type='income'
                />
                <HighlightCard
                    title='Saida'
                    amount='R$ 50,00'
                    lastTransaction='Última saída dia 13 de abril'
                    type='expense'
                />
                <HighlightCard
                    title='Total'
                    amount='R$ 250,00'
                    lastTransaction='01 à 16 de abril'
                    type='total'
                />
            </HighlighCards>

            <Transactions>
                <Title>Listagem</Title>

                <TransactionList
                    data={transactionData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <TransactionCard data={item} />
                    }

                />


            </Transactions>
        </Container>
    );
}