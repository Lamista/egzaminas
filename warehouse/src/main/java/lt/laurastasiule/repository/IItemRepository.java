package lt.laurastasiule.repository;

import lt.laurastasiule.model.Client;
import lt.laurastasiule.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IItemRepository extends JpaRepository<Item, Long> {
}
