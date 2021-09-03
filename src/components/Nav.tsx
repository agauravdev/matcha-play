import { Icon, Navbar, NavSearch, Typography } from '@agauravdev/matcha-ui';
import React, { useState } from 'react';
import { MdShoppingCart } from 'react-icons/all';

const Nav: React.FC = () => {
    const [searchVal, setSearchVal] = useState('');

    const onSearch = () => {
        console.log('Searched with keyword ' + searchVal);
    };
    return (
        <Navbar>
            <Typography variant="h6" style={{ marginRight: '1rem' }}>
                Brand Name
            </Typography>
            <NavSearch
                inputProps={{
                    onChange: (e: React.FormEvent<HTMLInputElement>) =>
                        setSearchVal(e.currentTarget.value),
                    value: searchVal,
                }}
                onSearch={onSearch}
            />
            <Icon
                size={1.5}
                style={{
                    cursor: 'pointer',
                    margin: '0.75rem',
                    marginLeft: 'auto',
                }}
            >
                <MdShoppingCart />
            </Icon>
            <Typography
                style={{
                    cursor: 'pointer',
                }}
                variant="subtitle-bold"
            >
                ABOUT US
            </Typography>
        </Navbar>
    );
};

export default Nav;