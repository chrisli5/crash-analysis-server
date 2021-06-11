CREATE TABLE bustabit (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    users INTEGER NOT NULL,
    bankRoll NUMERIC NOT NULL,
    investorProfit NUMERIC NOT NULL,
    totalBets NUMERIC NOT NULL,
    totalWagered NUMERIC NOT NULL,
    createdAt TIMESTAMP DEFAULT now() NOT NULL
)