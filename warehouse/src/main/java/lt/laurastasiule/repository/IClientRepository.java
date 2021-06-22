package lt.laurastasiule.repository;

import lt.laurastasiule.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IClientRepository extends JpaRepository<Client, Long> {
}
