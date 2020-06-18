-- ##############################################################################
-- (C) Copyright IBM Corp. 2020
--
-- SPDX-License-Identifier: Apache-2.0
-- ###############################################################################

-- Create the users
CREATE USER FHIRBATCH WITH LOGIN encrypted password 'change-password';
CREATE USER FHIRSERVER WITH LOGIN encrypted password 'change-password';

GRANT CONNECT ON DATABASE FHIRDB TO FHIRSERVER;
GRANT CONNECT ON DATABASE FHIRBATCH TO FHIRSERVER;

CREATE SCHEMA IF NOT EXISTS FHIRDATA;
CREATE SCHEMA IF NOT EXISTS FHIR_ADMIN;
CREATE SCHEMA IF NOT EXISTS FHIR_OAUTH;
CREATE SCHEMA IF NOT EXISTS FHIR_JBATCH;
-- EOF