/*
 * (C) Copyright IBM Corp. 2019
 *
 * SPDX-License-Identifier: Apache-2.0
 */

package com.ibm.watson.health.fhir.model.type;

import java.util.Collection;
import java.util.Objects;

public class StructureMapInputMode extends Code {
    /**
     * Source Instance
     */
    public static final StructureMapInputMode SOURCE = StructureMapInputMode.of(ValueSet.SOURCE);

    /**
     * Target Instance
     */
    public static final StructureMapInputMode TARGET = StructureMapInputMode.of(ValueSet.TARGET);

    private volatile int hashCode;

    private StructureMapInputMode(Builder builder) {
        super(builder);
    }

    public static StructureMapInputMode of(java.lang.String value) {
        return StructureMapInputMode.builder().value(value).build();
    }

    public static StructureMapInputMode of(ValueSet value) {
        return StructureMapInputMode.builder().value(value).build();
    }

    public static String string(java.lang.String value) {
        return StructureMapInputMode.builder().value(value).build();
    }

    public static Code code(java.lang.String value) {
        return StructureMapInputMode.builder().value(value).build();
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        StructureMapInputMode other = (StructureMapInputMode) obj;
        return Objects.equals(id, other.id) && Objects.equals(extension, other.extension) && Objects.equals(value, other.value);
    }

    @Override
    public int hashCode() {
        int result = hashCode;
        if (result == 0) {
            result = Objects.hash(id, extension, value);
            hashCode = result;
        }
        return result;
    }

    public Builder toBuilder() {
        Builder builder = new Builder();
        builder.id = id;
        builder.extension.addAll(extension);
        builder.value = value;
        return builder;
    }

    public static Builder builder() {
        return new Builder();
    }

    public static class Builder extends Code.Builder {
        private Builder() {
            super();
        }

        @Override
        public Builder id(java.lang.String id) {
            return (Builder) super.id(id);
        }

        @Override
        public Builder extension(Extension... extension) {
            return (Builder) super.extension(extension);
        }

        @Override
        public Builder extension(Collection<Extension> extension) {
            return (Builder) super.extension(extension);
        }

        @Override
        public Builder value(java.lang.String value) {
            return (Builder) super.value(ValueSet.from(value).value());
        }

        public Builder value(ValueSet value) {
            return (Builder) super.value(value.value());
        }

        @Override
        public StructureMapInputMode build() {
            return new StructureMapInputMode(this);
        }
    }

    public enum ValueSet {
        /**
         * Source Instance
         */
        SOURCE("source"),

        /**
         * Target Instance
         */
        TARGET("target");

        private final java.lang.String value;

        ValueSet(java.lang.String value) {
            this.value = value;
        }

        public java.lang.String value() {
            return value;
        }

        public static ValueSet from(java.lang.String value) {
            for (ValueSet c : ValueSet.values()) {
                if (c.value.equals(value)) {
                    return c;
                }
            }
            throw new IllegalArgumentException(value);
        }
    }
}
