import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

import { FlatList, FlatListProps } from 'react-native';
import { DataListProps } from '.';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
   
`;
export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(40)}px;
    background-color:  ${({ theme }) => theme.colors.primary};
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

`;

export const ContentWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
`;


export const UserInfo = styled.View`
    flex-direction: row; 
`;



export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 50px;
`;

export const User = styled.View`
    margin: ${RFValue(12)}px`;



export const UserGreeting = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.regular_italic_mono};
    font-size: ${RFValue(24)}px;
    font-style: italic;
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(18)}px;
    line-reight: ${RFValue(24)}px;
`;

export const Icon = styled(MaterialIcons)`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(24)}px;
`;

export const HighlighCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingLeft: 24 }
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFValue(100) + getStatusBarHeight()}px;
`;

export const Transactions = styled.View`
    flex: 1;
    padding 0 24px;
    margin-top: ${RFValue(84)}px;

`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.header};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;

`;

export const TransactionList = styled(
    FlatList as new (props: FlatListProps<DataListProps>) =>
        FlatList<DataListProps>).attrs({
            showsVerticalScroolIndicator: false
        })``;