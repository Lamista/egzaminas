package lt.laurastasiule.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import java.util.stream.Stream;

public enum ClientType {
    BASIC("įprastinis"),
    LOYAL("lojalus");

    private String typeName;

    ClientType(String typeName) {
        this.typeName = typeName;
    }

    @JsonCreator
    public static ClientType decode(final String typeName) {
        return Stream.of(ClientType.values()).filter(targetEnum -> targetEnum.typeName.equals(typeName)).findFirst().orElse(null);
    }

    @JsonValue
    public String getTypeName() {
        return typeName;
    }
}