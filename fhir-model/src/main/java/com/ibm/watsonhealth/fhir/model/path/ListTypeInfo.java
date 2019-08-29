/*
 * (C) Copyright IBM Corp. 2019
 * 
 * SPDX-License-Identifier: Apache-2.0
 */

package com.ibm.watsonhealth.fhir.model.path;

import java.util.Objects;

/**
 * This class is part of the implementation for the Types and Reflection section of the FHIRPath specification:
 * @see <a href="http://hl7.org/fhirpath/2018Sep/index.html#types-and-reflection">FHIRPath Types and Reflection</a>
 */
public class ListTypeInfo implements TypeInfo {
    private final String elementType;
    
    public ListTypeInfo(String elementType) {
        this.elementType = Objects.requireNonNull(elementType);
    }

    public String getElementType() {
        return elementType;
    }
}