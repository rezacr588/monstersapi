#!/bin/bash
database="monstersdb"
echo "Configuring $database"
dropdb -U postgres monstersdb
createdb -U postgres monstersdb
psql -U postgres monstersdb < ./bin/sql/monster.sql
echo "$database Configured"