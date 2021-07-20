// Copyright (C) 2021  Shanhu Tech Inc.
//
// This program is free software: you can redistribute it and/or modify it
// under the terms of the GNU Affero General Public License as published by the
// Free Software Foundation, either version 3 of the License, or (at your
// option) any later version.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License
// for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import * as ajax from './ajax'
import * as tracker from './tracker'
import * as redraw from './redraw'

export class Core {
    redraw: redraw.Redraw
    tracker: tracker.Tracker
    caller: ajax.Caller

    constructor(r: redraw.Redraw, t: tracker.Tracker) {
        this.redraw = r
        this.tracker = t
        this.caller = new ajax.Caller()
    }

    call(url: string, req: any, cb: ajax.Callbacks) {
        this.caller.call(url, req, cb)
    }

    goto(state: tracker.State) {
        return this.tracker.goto(state)
    }
}

export function make(r: redraw.Redraw, t: tracker.Tracker): Core {
    return new Core(r, t)
}
