import React from 'react'
import Header from './header/Header'
import { BrowserRouter, Route } from 'react-router-dom'

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    {/* <Route path="/" exact component={HomePage} />
                    <Route path="/products" exact component={Products} />
                    <Route path="/product/:id" exact component={Product} /> */}
                </div>
            </BrowserRouter>
        </div>
    )
}
