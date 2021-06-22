package lt.laurastasiule.dto;

import lombok.*;
import lt.laurastasiule.enums.ClientType;
import lt.laurastasiule.model.Item;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ClientDto {
    private long id;
    private String firstName;
    private String lastName;
    private LocalDate birthDay;
    private String phoneNo;
    private ClientType clientType;

    public ClientDto(String firstName, String lastName, LocalDate birthDay, String phoneNo, ClientType clientType) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
        this.phoneNo = phoneNo;
        this.clientType = clientType;
    }
}
