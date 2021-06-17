import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Card, Player } from '../../components';

const category = 'series';
const slideRows = [
    {
        title: 'Documentaries',
        data: [
            {
                genre: 'documentaries',
                maturity: '12',
                slug: 'man-on-wire',
                description: 'Man on Wire description',
                id: 'cdb04e38-4ea6-445b-9d03-6466ad034924',
                title: 'Man on Wire',
                docId: '2LJ4Y925uMsfDb1aggXV',
            },
        ],
    },
    {
        title: 'Feel Good',
        data: [
            {
                title: 'Juno',
                genre: 'feel-good',
                description: 'Juno description',
                maturity: '12',
                id: '1985cbe8-b6d7-442e-a955-d2d4f4175220',
                slug: 'juno',
                docId: 'KT7Qp8IylHQQs3fpHvxK',
            },
        ],
    },
    {
        title: 'children',
        data: [
            {
                title: 'Peppa Pig',
                genre: 'children',
                description: 'Peppa Pig description',
                maturity: '0',
                id: '506ef4fe-bc22-4da3-b8d9-35b9b541ab22',
                slug: 'peppa-pig',
                docId: 'tHhOMySyBDK70PzTfnh5',
            },
        ],
    },
];

describe('<Card />', () => {
    it('renders the <Card /> with populated data', () => {
        const { container, getByText } = render(
            <Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        
                        <Card.Entities>
                            {slideItem.data.map((item) => (
                                <Card.Item key={item.docId} item={item}>
                                    <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />

                                    <Card.Meta>
                                        <Card.SubTitle>{item.title}</Card.SubTitle>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>

                        <Card.Feature category={category}>
                            <Player>
                                <Player.Button />
                                <Player.Video src="/videos/bunny.mp4" />
                            </Player>
                        </Card.Feature>

                    </Card>
                ))}
            </Card.Group>
        );

        expect(getByText('Documentaries')).toBeTruthy();
        expect(getByText('Man on Wire')).toBeTruthy();
        expect(getByText('Man on Wire description')).toBeTruthy();
        
        expect(getByText('Feel Good')).toBeTruthy();
        expect(getByText('Juno')).toBeTruthy();
        expect(getByText('Juno description')).toBeTruthy();
        expect(container.firstChild).toBeTruthy();
    });

    it('renders the <Card /> and toggles the card feature', () => {
        const { container, queryByText, getByTestId, getByAltText } = render(
            <Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        
                        <Card.Entities>
                            {slideItem.data.map((item) => (
                                <Card.Item key={item.docId} item={item} data-testid={`${item.slug}-item-feature`}>
                                    <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />

                                    <Card.Meta>
                                        <Card.SubTitle>{item.title}</Card.SubTitle>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>

                        <Card.Feature category={category}>
                            <Player>
                                <Player.Button />
                                <Player.Video src="/videos/bunny.mp4" />
                            </Player>
                        </Card.Feature>

                    </Card>
                ))}
            </Card.Group>
        );

        expect(queryByText('MA-12')).toBeFalsy();
        fireEvent.click(getByTestId('juno-item-feature'));
        expect(queryByText('MA-12')).toBeTruthy();
        
        fireEvent.click(getByAltText('Close'));
        expect(queryByText('MA-12')).toBeFalsy();
        
        expect(queryByText('PG')).toBeFalsy();
        fireEvent.click(getByTestId('peppa-pig-item-feature'));
        expect(queryByText('PG')).toBeTruthy();
        
        fireEvent.click(getByAltText('Close'));
        expect(queryByText('PG')).toBeFalsy();
        expect(container.firstChild).toMatchSnapshot();
    });
});
