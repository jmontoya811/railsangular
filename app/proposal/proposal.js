"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Proposal = /** @class */ (function () {
    function Proposal(id, custoer, portfolio_url, tools, estimated_hours, hourly_rate, weeks_to_complete, client_email) {
        if (portfolio_url === void 0) { portfolio_url = 'http://'; }
        this.id = id;
        this.custoer = custoer;
        this.portfolio_url = portfolio_url;
        this.tools = tools;
        this.estimated_hours = estimated_hours;
        this.hourly_rate = hourly_rate;
        this.weeks_to_complete = weeks_to_complete;
        this.client_email = client_email;
    }
    return Proposal;
}());
exports.Proposal = Proposal;
//# sourceMappingURL=proposal.js.map