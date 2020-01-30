package com.itgstore.tierspayant.service.mapper;

import org.mapstruct.*;

import com.itgstore.tierspayant.domain.*;
import com.itgstore.tierspayant.service.dto.RoleAppDTO;

/**
 * Mapper for the entity PgwRoleApp and its DTO PgwRoleAppDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface RoleAppMapper extends EntityMapper<RoleAppDTO, RoleApp> {

    default RoleApp fromId(Long id) {
        if (id == null) {
            return null;
        }
        RoleApp pgwRoleApp = new RoleApp();
        pgwRoleApp.setId(id);
        return pgwRoleApp;
    }
}
