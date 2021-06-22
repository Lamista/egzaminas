package lt.laurastasiule.model;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.laurastasiule.dto.ItemDto;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Item {

    @Setter(AccessLevel.NONE)
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @NotNull
    private String title;
    @NotNull
    private String weight;
    @NotNull
    private short sectorNo;
    @NotNull
    private LocalDate placementDate;
    @ManyToOne(cascade= {CascadeType.MERGE, CascadeType.DETACH})
    @JoinColumn(name="client_id")
    private Client client;

    public Item(ItemDto itemDto) {
        this.title = itemDto.getTitle();
        this.weight = itemDto.getWeight();
        this.sectorNo = itemDto.getSectorNo();
        this.placementDate = itemDto.getPlacementDate();
    }
}
