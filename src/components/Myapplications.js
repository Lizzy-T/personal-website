import React, { Component } from 'react'

import '../components-styles/Myapplications.css'

export default class Myapplications extends  Component {
    state = {
        appList: []
    }

    render () {
        return (
            <div className="my-apps">
                <h1>My Job Applications</h1>
            </div>
        )
    }
}