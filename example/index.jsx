import { render } from 'react-dom';
import React from 'react';
import { TableSimple } from '../lib';


const Header = [ "Date", "Name",  "Email" ];

const data = [
    { email: "fake@gmail.com", name:"Ben", date:"5/05/1999"  },
    {  email: "Fraud@gmail.com", name:"Ken", date:"22/05/2005" },
    {  email: "error@gmail.com", name:"Jay", date: "23/09/2016" }
];
const App = ({Header, data, pageheader}) =>
    <div>
       <header>
       <h1>A</h1>
       </header>
       <div className="well well-lg">
       7<br />Users</div>
        <TableSimple
            title="Users"
            headers={ Header }
            data={ data }
            columns="date.name.email"
            arrayOption={ [ 'all', ', '] }
        />
    </div>


render(<div>
    
    <App Header={Header} data={data} />
    </div>,
    document.getElementById('container')
);
