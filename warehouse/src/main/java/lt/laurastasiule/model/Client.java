package lt.laurastasiule.model;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.laurastasiule.enums.ClientType;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Client {

    @Setter(AccessLevel.NONE)
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @NotNull
    private String firstName;
    @NotNull
    private String lastName;
    @NotNull
    private LocalDate birthDay;
    @NotNull
    private String phoneNo;
    @NotNull
    @Enumerated(EnumType.STRING)
    private ClientType clientType;
    @OneToMany(mappedBy = "client")
    private List<Item> items = new ArrayList<>();

    public Client(String firstName, String lastName, LocalDate birthDay, String phoneNo, ClientType clientType) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
        this.phoneNo = phoneNo;
        this.clientType = clientType;
    }

    public void addItem(Item item) {
        items.add(item);
    }
}
